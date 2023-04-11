import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The processing status of this account.
 */
export declare enum AccountV2AccountStatusEnum {
    Discovered = "DISCOVERED",
    Processing = "PROCESSING",
    Ready = "READY",
    Error = "ERROR",
    Suspended = "SUSPENDED"
}
/**
 * AccountV2Serializer.
 */
export declare class AccountV2 extends SpeakeasyBase {
    /**
     * The date & time at which the account object was created.
     */
    created?: Date;
    /**
     * The Account IBAN
     */
    iban?: string;
    /**
     * The ID of this Account, used to refer to this account in other API calls.
     */
    id?: string;
    /**
     * The ASPSP associated with this account.
     */
    institutionId?: string;
    /**
     * The date & time at which the account object was last accessed.
     */
    lastAccessed?: Date;
    /**
     * The name of the account owner.
     */
    ownerName?: string;
    /**
     * The processing status of this account.
     */
    status?: AccountV2AccountStatusEnum;
}
