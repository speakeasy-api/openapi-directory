import { SpeakeasyBase } from "../../../internal/utils";
import { LearningOutcomes } from "./learningoutcomes";
export declare class CourseResponseMetadata extends SpeakeasyBase {
    learningOutcomes?: LearningOutcomes[];
}
export declare class CourseResponse extends SpeakeasyBase {
    coverImageUrl?: string;
    createdAt?: Date;
    id?: string;
    metadata?: CourseResponseMetadata;
    name?: string;
}
