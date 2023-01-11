import { SpeakeasyBase } from "../../../internal/utils";
import { Token } from "./token";
export declare class Span extends SpeakeasyBase {
    end?: number;
    start?: number;
    text?: string;
    token?: Token[];
}
