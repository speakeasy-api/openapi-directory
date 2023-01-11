import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityLinks } from "./activitylinks";
export declare enum ActivityTypeEnum {
    Translated = "translated",
    Proofread = "proofread"
}
export declare class Activity extends SpeakeasyBase {
    activityAt?: number;
    id?: number;
    links?: ActivityLinks;
    sourceText?: string;
    targetText?: string;
    translator?: number;
    type?: ActivityTypeEnum;
}
