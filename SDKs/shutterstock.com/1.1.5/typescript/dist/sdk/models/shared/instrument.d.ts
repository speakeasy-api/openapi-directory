import { SpeakeasyBase } from "../../../internal/utils";
import { Preview } from "./preview";
/**
 * Information about an musical instrument
**/
export declare class Instrument extends SpeakeasyBase {
    id?: string;
    name?: string;
    previews?: Preview[];
    tags?: string[];
}
