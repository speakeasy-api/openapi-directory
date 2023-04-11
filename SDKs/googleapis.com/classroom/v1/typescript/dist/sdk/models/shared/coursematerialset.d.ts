import { SpeakeasyBase } from "../../../internal/utils";
import { CourseMaterial } from "./coursematerial";
/**
 * A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.
 */
export declare class CourseMaterialSet extends SpeakeasyBase {
    /**
     * Materials attached to this set.
     */
    materials?: CourseMaterial[];
    /**
     * Title for this set.
     */
    title?: string;
}
