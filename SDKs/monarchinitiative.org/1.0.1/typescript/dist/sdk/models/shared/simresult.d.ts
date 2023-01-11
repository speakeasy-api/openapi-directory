import { SpeakeasyBase } from "../../../internal/utils";
import { SimMatch } from "./simmatch";
import { SimMetadata } from "./simmetadata";
import { SimQuery } from "./simquery";
export declare class SimResult extends SpeakeasyBase {
    matches?: SimMatch[];
    metadata?: SimMetadata;
    query?: SimQuery;
}
