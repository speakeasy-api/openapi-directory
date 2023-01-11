import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// ReferenceResourceAttributes
/** 
 * Model that stores the attributes of a reference.
 * 
 * Many properties match the meaning described in the
 * [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).
**/
export class ReferenceResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=annote" })
  annote?: string;

  @SpeakeasyMetadata({ data: "json, name=authors", elemType: Person })
  authors?: Person[];

  @SpeakeasyMetadata({ data: "json, name=bib_type" })
  bibType?: string;

  @SpeakeasyMetadata({ data: "json, name=booktitle" })
  booktitle?: string;

  @SpeakeasyMetadata({ data: "json, name=chapter" })
  chapter?: string;

  @SpeakeasyMetadata({ data: "json, name=crossref" })
  crossref?: string;

  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "json, name=edition" })
  edition?: string;

  @SpeakeasyMetadata({ data: "json, name=editors", elemType: Person })
  editors?: Person[];

  @SpeakeasyMetadata({ data: "json, name=howpublished" })
  howpublished?: string;

  @SpeakeasyMetadata({ data: "json, name=immutable_id" })
  immutableId?: string;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution?: string;

  @SpeakeasyMetadata({ data: "json, name=journal" })
  journal?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=last_modified" })
  lastModified: Date;

  @SpeakeasyMetadata({ data: "json, name=month" })
  month?: string;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=school" })
  school?: string;

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: string;
}
