import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesMatchedStop } from "./tflapipresentationentitiesmatchedstop";
import { TflApiPresentationEntitiesTimetable } from "./tflapipresentationentitiestimetable";
import { TflApiPresentationEntitiesTimetablesDisambiguation } from "./tflapipresentationentitiestimetablesdisambiguation";
/**
 * OK
 */
export declare class TflApiPresentationEntitiesTimetableResponse extends SpeakeasyBase {
    direction?: string;
    disambiguation?: TflApiPresentationEntitiesTimetablesDisambiguation;
    lineId?: string;
    lineName?: string;
    pdfUrl?: string;
    stations?: TflApiPresentationEntitiesMatchedStop[];
    statusErrorMessage?: string;
    stops?: TflApiPresentationEntitiesMatchedStop[];
    timetable?: TflApiPresentationEntitiesTimetable;
}
