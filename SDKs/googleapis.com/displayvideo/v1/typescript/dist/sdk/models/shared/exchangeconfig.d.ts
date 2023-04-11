import { SpeakeasyBase } from "../../../internal/utils";
import { ExchangeConfigEnabledExchange } from "./exchangeconfigenabledexchange";
/**
 * Settings that control which exchanges are enabled for a partner.
 */
export declare class ExchangeConfig extends SpeakeasyBase {
    /**
     * All enabled exchanges in the partner. Duplicate enabled exchanges will be ignored.
     */
    enabledExchanges?: ExchangeConfigEnabledExchange[];
}
