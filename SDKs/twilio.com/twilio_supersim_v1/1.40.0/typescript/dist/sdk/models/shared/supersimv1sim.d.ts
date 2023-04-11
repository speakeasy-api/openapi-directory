import { SpeakeasyBase } from "../../../internal/utils";
import { SimEnumStatusEnum } from "./simenumstatusenum";
/**
 * Created
 */
export declare class SupersimV1Sim extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the Super SIM belongs to.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The unique ID of the Fleet configured for this SIM.
     */
    fleetSid?: string;
    /**
     * The [ICCID](https://en.wikipedia.org/wiki/Subscriber_identity_module#ICCID) associated with the SIM.
     */
    iccid?: string;
    links?: Record<string, any>;
    /**
     * The unique string that identifies the Sim resource.
     */
    sid?: string;
    status?: SimEnumStatusEnum;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the Sim Resource.
     */
    url?: string;
}
