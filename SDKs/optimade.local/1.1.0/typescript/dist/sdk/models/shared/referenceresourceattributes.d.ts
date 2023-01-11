import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * Model that stores the attributes of a reference.
 *
 * Many properties match the meaning described in the
 * [BibTeX specification](http://bibtexml.sourceforge.net/btxdoc.pdf).
**/
export declare class ReferenceResourceAttributes extends SpeakeasyBase {
    address?: string;
    annote?: string;
    authors?: Person[];
    bibType?: string;
    booktitle?: string;
    chapter?: string;
    crossref?: string;
    doi?: string;
    edition?: string;
    editors?: Person[];
    howpublished?: string;
    immutableId?: string;
    institution?: string;
    journal?: string;
    key?: string;
    lastModified: Date;
    month?: string;
    note?: string;
    number?: string;
    organization?: string;
    pages?: string;
    publisher?: string;
    school?: string;
    series?: string;
    title?: string;
    url?: string;
    volume?: string;
    year?: string;
}
