import { SpeakeasyBase } from "../../../internal/utils";
import { EsimProfileEnumStatusEnum } from "./esimprofileenumstatusenum";
/**
 * Created
 */
export declare class SupersimV1EsimProfile extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) to which the eSIM Profile resource belongs.
     */
    accountSid?: string;
    /**
     * Combined machine-readable activation code for acquiring an eSIM Profile with the Activation Code download method. Can be used in a QR code to download an eSIM profile.
     */
    activationCode?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * Identifier of the eUICC that can claim the eSIM Profile.
     */
    eid?: string;
    /**
     * Code indicating the failure if the download of the SIM Profile failed and the eSIM Profile is in `failed` state.
     */
    errorCode?: string;
    /**
     * Error message describing the failure if the download of the SIM Profile failed and the eSIM Profile is in `failed` state.
     */
    errorMessage?: string;
    /**
     * The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with the Sim resource.
     */
    iccid?: string;
    /**
     * Unique identifier of the eSIM profile that can be used to identify and download the eSIM profile from the SM-DP+ server. Populated if `generate_matching_id` is set to `true` when creating the eSIM profile reservation.
     */
    matchingId?: string;
    /**
     * The unique string that we created to identify the eSIM Profile resource.
     */
    sid?: string;
    /**
     * The SID of the [Sim](https://www.twilio.com/docs/wireless/api/sim-resource) resource that this eSIM Profile controls.
     */
    simSid?: string;
    /**
     * Address of the SM-DP+ server from which the Profile will be downloaded. The URL will appear once the eSIM Profile reaches the status `available`.
     */
    smdpPlusAddress?: string;
    status?: EsimProfileEnumStatusEnum;
    /**
     * The absolute URL of the eSIM Profile resource.
     */
    url?: string;
}
