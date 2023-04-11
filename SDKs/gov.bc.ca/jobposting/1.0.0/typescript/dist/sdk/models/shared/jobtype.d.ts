import { SpeakeasyBase } from "../../../internal/utils";
import { JobTypeIDEnum } from "./jobtypeidenum";
export declare class JobType extends SpeakeasyBase {
    /**
     * The name of the Job Type.
     */
    caption?: string;
    /**
     * The type of work.
     */
    id?: JobTypeIDEnum;
}
