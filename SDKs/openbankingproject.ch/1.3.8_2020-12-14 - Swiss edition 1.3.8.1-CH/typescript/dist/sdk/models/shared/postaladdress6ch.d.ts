import { SpeakeasyBase } from "../../../internal/utils";
/**
 * as in ISO pain.001.001.03.ch.02 PostalAddress6
 *
 * @remarks
 * If possible structured. Simultaneous use of the structured elements <StrtNm>/ <BldgNb>/<PstCd>/<TwnNm> and the unstructured element <AdrLine> is not permitted.
 * as in ISO pain.001.001.03.ch.02 PostalAddress6-CH
 *
 */
export declare class PostalAddress6CH extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    buildingNumber?: string;
    /**
     * ISO 3166 ALPHA2 country code.
     */
    country?: string;
    postCode?: string;
    streetName?: string;
    townName?: string;
}
