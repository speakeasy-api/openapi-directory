import { SpeakeasyBase } from "../../../internal/utils";
import { NADate } from "./nadate";
import { NAHouseModelCa } from "./nahousemodelca";
import { NALinkStation } from "./nalinkstation";
import { NAPidAlgo } from "./napidalgo";
import { NASimpleAlgo } from "./nasimplealgo";
import { NAStation } from "./nastation";
export declare class NAHouseModel extends SpeakeasyBase {
    algoType?: string;
    ca?: NAHouseModelCa;
    extTemps?: Record<string, number>;
    firstAnticipateAvail?: boolean;
    firstPidAvail?: boolean;
    gefs?: NAStation;
    inUse?: string;
    lastComputeTry?: NADate;
    linkStation?: NALinkStation;
    pidAlgo?: NAPidAlgo;
    preferedAlgoType?: string;
    simpleAlgo?: NASimpleAlgo;
    station?: NAStation;
    stationFirsttimeAnticipate?: boolean;
    time?: NADate;
    timeAlgoChanged?: number;
    timePidComputed?: number;
}
