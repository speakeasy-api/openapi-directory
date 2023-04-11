import { SpeakeasyBase } from "../../../internal/utils";
import { Metric } from "./metric";
export declare class Meta extends SpeakeasyBase {
    metrics?: Metric[];
    puid?: string;
    requestPath?: Record<string, string>;
    routing?: Record<string, number>;
    tags?: Record<string, any>;
}
