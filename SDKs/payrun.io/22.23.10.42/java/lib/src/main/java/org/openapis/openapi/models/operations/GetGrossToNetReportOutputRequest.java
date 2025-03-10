/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetGrossToNetReportOutputRequest {
    /**
     * The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Api-Version")
    public String apiVersion;
    public GetGrossToNetReportOutputRequest withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    
    /**
     * The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete.
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetGrossToNetReportOutputRequest withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    
    /**
     * The employer unique key. E.g. ER001
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmployerKey")
    public String employerKey;
    public GetGrossToNetReportOutputRequest withEmployerKey(String employerKey) {
        this.employerKey = employerKey;
        return this;
    }
    
    /**
     * The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxIndex")
    public String maxIndex;
    public GetGrossToNetReportOutputRequest withMaxIndex(String maxIndex) {
        this.maxIndex = maxIndex;
        return this;
    }
    
    /**
     * The pay schedule unique key. E.g. SCH001
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PayScheduleKey")
    public String payScheduleKey;
    public GetGrossToNetReportOutputRequest withPayScheduleKey(String payScheduleKey) {
        this.payScheduleKey = payScheduleKey;
        return this;
    }
    
    /**
     * The element index to begin the report. Used to control paging within large data sets. E.g. 1
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartIndex")
    public String startIndex;
    public GetGrossToNetReportOutputRequest withStartIndex(String startIndex) {
        this.startIndex = startIndex;
        return this;
    }
    
    /**
     * The tax period number.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxPeriod")
    public String taxPeriod;
    public GetGrossToNetReportOutputRequest withTaxPeriod(String taxPeriod) {
        this.taxPeriod = taxPeriod;
        return this;
    }
    
    /**
     * The tax year. E.g. 2017 = 2017/18 year.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TaxYear")
    public String taxYear;
    public GetGrossToNetReportOutputRequest withTaxYear(String taxYear) {
        this.taxYear = taxYear;
        return this;
    }
    
}
