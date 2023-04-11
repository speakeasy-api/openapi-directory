import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentStatusEnum } from "./consentstatusenum";
/**
 * Body of the JSON response for a successful get status request for a consent.
 */
export declare class ConsentStatusResponse200 extends SpeakeasyBase {
    /**
     * This is the overall lifecycle status of the consent.
     *
     * @remarks
     *
     * Valid values are:
     *   - 'received': The consent data have been received and are technically correct.
     *     The data is not authorised yet.
     *   - 'rejected': The consent data have been rejected e.g. since no successful authorisation has taken place.
     *   - 'valid': The consent is accepted and valid for GET account data calls and others as specified in the consent object.
     *   - 'revokedByPsu': The consent has been revoked by the PSU towards the ASPSP.
     *   - 'expired': The consent expired.
     *   - 'terminatedByTpp': The corresponding TPP has terminated the consent by applying the DELETE method to the consent resource.
     *   - 'partiallyAuthorised': The consent is due to a multi-level authorisation, some but not all mandated authorisations have been performed yet.
     *
     * The ASPSP might add further codes. These codes then shall be contained in the ASPSP's documentation of the XS2A interface
     * and has to be added to this API definition as well.
     *
     */
    consentStatus: ConsentStatusEnum;
    /**
     * Text to be displayed to the PSU.
     */
    psuMessage?: string;
}
