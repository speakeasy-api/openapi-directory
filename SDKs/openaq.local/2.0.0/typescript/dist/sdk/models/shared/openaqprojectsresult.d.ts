import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectsRow } from "./projectsrow";
export declare class OpenAQProjectsResultMeta extends SpeakeasyBase {
    found?: number;
    license?: string;
    limit?: number;
    name?: string;
    page?: number;
    website?: string;
}
/**
 * Successful Response
 */
export declare class OpenAQProjectsResult extends SpeakeasyBase {
    meta?: OpenAQProjectsResultMeta;
    results: ProjectsRow[];
}
