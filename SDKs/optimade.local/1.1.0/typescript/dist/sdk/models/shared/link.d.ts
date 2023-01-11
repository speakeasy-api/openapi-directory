import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link **MUST** be represented as either: a string containing the link's URL or a link object.
**/
export declare class Link extends SpeakeasyBase {
    href: string;
    meta?: Record<string, any>;
}
