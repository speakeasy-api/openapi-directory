import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The return address to be printed on the check. If omitted this will default to the address of the Entity of the Account used to make the Check Transfer.
 */
export declare class CreateACheckTransferParametersReturnAddress extends SpeakeasyBase {
    /**
     * The city of the return address.
     */
    city: string;
    /**
     * The first line of the return address.
     */
    line1: string;
    /**
     * The second line of the return address.
     */
    line2?: string;
    /**
     * The name of the return address.
     */
    name: string;
    /**
     * The US state of the return address.
     */
    state: string;
    /**
     * The postal code of the return address.
     */
    zip: string;
}
export declare class CreateACheckTransferParameters extends SpeakeasyBase {
    /**
     * The identifier for the account that will send the transfer.
     */
    accountId: string;
    /**
     * The city of the check's destination.
     */
    addressCity: string;
    /**
     * The street address of the check's destination.
     */
    addressLine1: string;
    /**
     * The second line of the address of the check's destination.
     */
    addressLine2?: string;
    /**
     * The state of the check's destination.
     */
    addressState: string;
    /**
     * The postal code of the check's destination.
     */
    addressZip: string;
    /**
     * The transfer amount in cents.
     */
    amount: number;
    /**
     * The descriptor that will be printed on the memo field on the check.
     */
    message: string;
    /**
     * The descriptor that will be printed on the letter included with the check.
     */
    note?: string;
    /**
     * The name that will be printed on the check.
     */
    recipientName: string;
    /**
     * Whether the transfer requires explicit approval via the dashboard or API.
     */
    requireApproval?: boolean;
    /**
     * The return address to be printed on the check. If omitted this will default to the address of the Entity of the Account used to make the Check Transfer.
     */
    returnAddress?: CreateACheckTransferParametersReturnAddress;
}
