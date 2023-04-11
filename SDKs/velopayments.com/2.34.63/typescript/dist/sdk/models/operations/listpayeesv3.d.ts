import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPayeesV3Request extends SpeakeasyBase {
    /**
     * Payee disabled
     */
    disabled?: boolean;
    /**
     * The display name of the payees.
     */
    displayName?: string;
    /**
     * Email address
     */
    email?: string;
    /**
     * The onboarded status of the payees.
     */
    onboardedStatus?: string;
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * Page size. Default is 25. Max allowable is 100.
     */
    pageSize?: number;
    /**
     * The country of the payee - 2 letter ISO 3166-1 country code (upper case)
     */
    payeeCountry?: string;
    /**
     * The onboarded status of the payees.
     */
    payeeType?: string;
    /**
     * The account owner Payor ID
     */
    payorId: string;
    /**
     * The remote id of the payees.
     */
    remoteId?: string;
    /**
     * List of sort fields (e.g. ?sort=onboardedStatus:asc,name:asc) Default is name:asc 'name' is treated as company name for companies - last name + ',' + firstName for individuals The supported sort fields are - payeeId, displayName, payoutStatus, onboardedStatus.
     *
     * @remarks
     *
     */
    sort?: string;
    /**
     * The watchlistStatus of the payees.
     */
    watchlistStatus?: string;
}
export declare class ListPayeesV3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Details of Payee
     */
    pagedPayeeResponseV3?: shared.PagedPayeeResponseV3;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
    /**
     * Invalid access token. May be expired or invalid
     */
    inlineResponse401?: shared.InlineResponse401;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
    /**
     * The resource was not found or is no longer available
     *
     * @remarks
     *
     */
    inlineResponse404?: shared.InlineResponse404;
}
