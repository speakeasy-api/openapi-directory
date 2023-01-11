import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The representation of a bank account.
**/
export declare class Account extends SpeakeasyBase {
    aspspIdentifier: string;
    created: Date;
    iban: string;
    id: string;
    lastAccessed: Date;
    status: Record<string, any>;
}
