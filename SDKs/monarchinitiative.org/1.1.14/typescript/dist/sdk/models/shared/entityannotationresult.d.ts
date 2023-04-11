import { SpeakeasyBase } from "../../../internal/utils";
import { Span } from "./span";
/**
 * Success
 */
export declare class EntityAnnotationResult extends SpeakeasyBase {
    content?: string;
    /**
     * A marked-up span of text
     */
    spans?: Span[];
}
