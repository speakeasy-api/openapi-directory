import { SpeakeasyBase } from "../../../internal/utils";
import { NAMeasure } from "./nameasure";
import { NAPlace } from "./naplace";
export declare class NAPublicData extends SpeakeasyBase {
    /**
     * id of the station
     */
    id?: string;
    mark?: number;
    measures?: Record<string, NAMeasure>;
    /**
     * Latest measurements of the station, organized by module
     */
    moduleTypes?: Record<string, string>;
    modules?: string[];
    place?: NAPlace;
}
