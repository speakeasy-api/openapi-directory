import { SpeakeasyBase } from "../../../internal/utils";
export declare class ApiKeyDailyLimit extends SpeakeasyBase {
    /**
     * Number of lookups performed today which count towards your daily limit.
     */
    consumed: number;
    /**
     * `number` or `null`. The daily lookup limit currently set on your key.
     *
     * @remarks
     * `null` means the limit is currently disabled.
     */
    limit: number;
}
