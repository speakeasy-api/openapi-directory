import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfig } from "./jobconfig";
/**
 * Transcoding job template resource.
**/
export declare class JobTemplate extends SpeakeasyBase {
    config?: JobConfig;
    labels?: Record<string, string>;
    name?: string;
}
