import { SpeakeasyBase } from "../../../internal/utils";
export declare class CoachResourceAttributes extends SpeakeasyBase {
    firstName?: string;
    lastName?: string;
}
export declare class CoachResourceLinks extends SpeakeasyBase {
    self: string;
}
export declare enum CoachResourceTypeEnum {
    Coach = "coach"
}
export declare class CoachResource extends SpeakeasyBase {
    attributes: CoachResourceAttributes;
    id: string;
    links?: CoachResourceLinks;
    type: CoachResourceTypeEnum;
}
