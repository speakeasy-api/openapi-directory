import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagInput extends SpeakeasyBase {
    name: string;
    slug: string;
}
export declare class Tag extends SpeakeasyBase {
    id?: number;
    name: string;
    slug: string;
    taggedItems?: number;
}
