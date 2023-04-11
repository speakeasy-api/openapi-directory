import { SpeakeasyBase } from "../../../internal/utils";
import { Process } from "./process";
export declare class ProjectRequest extends SpeakeasyBase {
    /**
     * Id of the file on which the process is to be applied.
     */
    fileId: string;
    process?: Process;
    /**
     * Name of the project with which it is saved.
     */
    projectTitle: string;
}
