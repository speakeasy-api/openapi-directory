import { SpeakeasyBase } from "../../../internal/utils";
import { CreditorAccount } from "./creditoraccount";
export declare class PaginatedCreditorAccountList extends SpeakeasyBase {
    count?: number;
    next?: string;
    previous?: string;
    results?: CreditorAccount[];
}
