import { SpeakeasyBase } from "../../../internal/utils";
import { V3Departure } from "./v3departure";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StopModel } from "./v3stopmodel";
export declare class V3DeparturesResponse extends SpeakeasyBase {
    departures?: V3Departure[];
    directions?: Record<string, V3Direction>;
    disruptions?: Record<string, V3Disruption>;
    routes?: Record<string, Record<string, any>>;
    runs?: Record<string, V3Run>;
    status?: V3Status;
    stops?: Record<string, V3StopModel>;
}
