import { SpeakeasyBase } from "../../../internal/utils";
import { ColorDefinition } from "./colordefinition";
export declare class Colors extends SpeakeasyBase {
    calendar?: Record<string, ColorDefinition>;
    event?: Record<string, ColorDefinition>;
    kind?: string;
    updated?: Date;
}
