import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to create a script project. Request to create a script project.
 */
export declare class CreateProjectRequest extends SpeakeasyBase {
    /**
     * The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created.
     */
    parentId?: string;
    /**
     * The title for the project.
     */
    title?: string;
}
