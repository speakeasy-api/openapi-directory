import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiKeyIndividualLimit extends SpeakeasyBase {
    /**
     * `number` or `null` Limit set on the number of lookups that can be
     *
     * @remarks
     * performed from a single IP address. `null` means the limit is currently
     * disabled.
     */
    limit: number;
}
