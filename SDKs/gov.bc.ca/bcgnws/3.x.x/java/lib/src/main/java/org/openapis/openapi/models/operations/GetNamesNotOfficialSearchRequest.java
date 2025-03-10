/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetNamesNotOfficialSearchRequest {
    /**
     * A flag to indicate whether to embed the corresponding 'feature' into each matching name
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=embed")
    public GetNamesNotOfficialSearchEmbedEnum embed;

    public GetNamesNotOfficialSearchRequest withEmbed(GetNamesNotOfficialSearchEmbedEnum embed) {
        this.embed = embed;
        return this;
    }
    
    /**
     * If the 'name' parameter is specified, 'exactSpelling' specifies whether to include only names that exactly match the search text (exactSpelling=1), or whether to also include names with similar spellings (exactSpelling=0)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exactSpelling")
    public GetNamesNotOfficialSearchExactSpellingEnum exactSpelling;

    public GetNamesNotOfficialSearchRequest withExactSpelling(GetNamesNotOfficialSearchExactSpellingEnum exactSpelling) {
        this.exactSpelling = exactSpelling;
        return this;
    }
    
    /**
     * A filter to limit the search to names associated with features of a certain 'category'  The value of this parameter should be a 'featureCategoryCode' value returned by the /featureCategories resource, or an asterisk (*) to request that all feature categories be included.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureCategory")
    public String featureCategory;

    public GetNamesNotOfficialSearchRequest withFeatureCategory(String featureCategory) {
        this.featureCategory = featureCategory;
        return this;
    }
    
    /**
     * A filter to limit the search to names associated with features of a certain 'class'  The value of this parameter should be a 'featureClassCode' value returned by the /featureClasses resource, or an asterisk (*) to request that all feature classes be included.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureClass")
    public String featureClass;

    public GetNamesNotOfficialSearchRequest withFeatureClass(String featureClass) {
        this.featureClass = featureClass;
        return this;
    }
    
    /**
     * A filter to limit the search to names associated with features of a certain 'type'  The value of this parameter should be a 'featureTypeCode' value returned by the /featureTypes resource, or an asterisk (*) to request that all feature types be included
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=featureType")
    public String featureType;

    public GetNamesNotOfficialSearchRequest withFeatureType(String featureType) {
        this.featureType = featureType;
        return this;
    }
    
    /**
     * The number of search results to return (1-200)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=itemsPerPage")
    public Long itemsPerPage;

    public GetNamesNotOfficialSearchRequest withItemsPerPage(Long itemsPerPage) {
        this.itemsPerPage = itemsPerPage;
        return this;
    }
    
    /**
     * A filter to search based on the the text of the name itself.  Use the asterisk (*) as a wildcard character.  For example 'vancouv*'
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;

    public GetNamesNotOfficialSearchRequest withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The format of the output.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputFormat")
    public GetNamesNotOfficialSearchOutputFormatEnum outputFormat;

    public GetNamesNotOfficialSearchRequest withOutputFormat(GetNamesNotOfficialSearchOutputFormatEnum outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    
    /**
     * The EPSG code of the spatial reference system (SRS) to use for output geometries.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public GetNamesNotOfficialSearchOutputSrsEnum outputSRS;

    public GetNamesNotOfficialSearchRequest withOutputSRS(GetNamesNotOfficialSearchOutputSrsEnum outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
    
    /**
     * A flag indicating whether to include with each matching name a succinct list of attributes (summary), or a comprehensive list of attributes (detail)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputStyle")
    public GetNamesNotOfficialSearchOutputStyleEnum outputStyle;

    public GetNamesNotOfficialSearchRequest withOutputStyle(GetNamesNotOfficialSearchOutputStyleEnum outputStyle) {
        this.outputStyle = outputStyle;
        return this;
    }
    
    /**
     * The distance to move the accessPoint away from the curb and towards the inside of the parcel (in metres). Ignored if locationDescriptor not set to accessPoint.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public GetNamesNotOfficialSearchSortByEnum sortBy;

    public GetNamesNotOfficialSearchRequest withSortBy(GetNamesNotOfficialSearchSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    
    /**
     * The index of the first record to be returned (&gt;= 1)
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startIndex")
    public Long startIndex;

    public GetNamesNotOfficialSearchRequest withStartIndex(Long startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    
    public GetNamesNotOfficialSearchRequest(@JsonProperty("name") String name, @JsonProperty("outputFormat") GetNamesNotOfficialSearchOutputFormatEnum outputFormat) {
        this.name = name;
        this.outputFormat = outputFormat;
  }
}
