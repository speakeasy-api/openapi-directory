import { SpeakeasyBase } from "../../../internal/utils";
import { Token } from "./token";
export declare class Span extends SpeakeasyBase {
    /**
     * end of span text relative to content
     */
    end?: number;
    /**
     * start of span text relative to content
     */
    start?: number;
    /**
     * span text
     */
    text?: string;
    /**
     * A token or entity extracted from the span text
     */
    token?: Token[];
}
