import { SpeakeasyBase } from "../../../internal/utils";
import { V3PatternDeparture } from "./v3patterndeparture";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StoppingPatternStop } from "./v3stoppingpatternstop";
export declare class V3StoppingPattern extends SpeakeasyBase {
    departures?: V3PatternDeparture[];
    directions?: Record<string, V3Direction>;
    disruptions?: V3Disruption[];
    routes?: Record<string, Record<string, any>>;
    runs?: Record<string, V3Run>;
    status?: V3Status;
    stops?: Record<string, V3StoppingPatternStop>;
}
