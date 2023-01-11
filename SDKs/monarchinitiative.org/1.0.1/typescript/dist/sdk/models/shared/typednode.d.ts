import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
export declare class TypedNode extends SpeakeasyBase {
    id: string;
    label?: string;
    taxon?: Node;
    type?: string;
}
