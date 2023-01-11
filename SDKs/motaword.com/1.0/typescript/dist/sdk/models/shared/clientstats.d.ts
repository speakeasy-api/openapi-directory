import { SpeakeasyBase } from "../../../internal/utils";
import { Monetary } from "./monetary";
export declare class ClientStats extends SpeakeasyBase {
    documentCount?: number;
    nps?: number;
    startedProjectCount?: number;
    totalDiscounted?: Monetary;
    totalProjectCount?: number;
    totalSpending?: number;
    translatorCount?: number;
}
