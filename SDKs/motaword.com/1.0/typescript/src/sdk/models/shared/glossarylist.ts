import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Glossary } from "./glossary";
import { PagingMeta } from "./pagingmeta";



export class GlossaryList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=glossaries", elemType: Glossary })
  glossaries?: Glossary[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;
}
