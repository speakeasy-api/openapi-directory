import { SpeakeasyBase } from "../../../internal/utils";
import { Glossary } from "./glossary";
import { PagingMeta } from "./pagingmeta";
export declare class GlossaryList extends SpeakeasyBase {
    glossaries?: Glossary[];
    meta?: PagingMeta;
}
