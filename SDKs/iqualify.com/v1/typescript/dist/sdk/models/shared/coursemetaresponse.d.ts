import { SpeakeasyBase } from "../../../internal/utils";
import { LearningOutcomes } from "./learningoutcomes";
export declare class CourseMetaResponseMetadata extends SpeakeasyBase {
    category?: string;
    learningOutcomes?: LearningOutcomes[];
    level?: string;
    rootContentId?: string;
    tags?: string[];
    topic?: string;
}
/**
 * Course detail
 */
export declare class CourseMetaResponse extends SpeakeasyBase {
    coverImageUrl?: string;
    createdAt?: Date;
    id?: string;
    metadata?: CourseMetaResponseMetadata;
    name?: string;
    tasksEnabled?: boolean;
}
