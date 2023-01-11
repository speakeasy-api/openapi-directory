import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectsRow } from "./projectsrow";
export declare class OpenAqProjectsResultMeta extends SpeakeasyBase {
    found?: number;
    license?: string;
    limit?: number;
    name?: string;
    page?: number;
    website?: string;
}
export declare class OpenAqProjectsResult extends SpeakeasyBase {
    meta?: OpenAqProjectsResultMeta;
    results: ProjectsRow[];
}
