import { SpeakeasyBase } from "../../../internal/utils";
import { PulseMCQOption } from "./pulsemcqoption";
import { PulseSpatialOption } from "./pulsespatialoption";
export declare class PulseAnswer extends SpeakeasyBase {
    multiChoiceAnswer?: PulseMCQOption[];
    spatialAnswer?: PulseSpatialOption[];
    textAnswer?: string;
}
