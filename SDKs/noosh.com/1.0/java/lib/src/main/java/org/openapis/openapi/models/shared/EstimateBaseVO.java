/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.time.LocalDate;

/**
 * EstimateBaseVO - Java type: com.noosh.nooshapi.vo.EstimateBaseVO
 */
public class EstimateBaseVO {
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("create_date")
    public LocalDate createDate;

    public EstimateBaseVO withCreateDate(LocalDate createDate) {
        this.createDate = createDate;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;

    public EstimateBaseVO withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimate_id")
    public Long estimateId;

    public EstimateBaseVO withEstimateId(Long estimateId) {
        this.estimateId = estimateId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("estimate_title")
    public String estimateTitle;

    public EstimateBaseVO withEstimateTitle(String estimateTitle) {
        this.estimateTitle = estimateTitle;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("expiration_date")
    public LocalDate expirationDate;

    public EstimateBaseVO withExpirationDate(LocalDate expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    
    /**
     * Java type: com.noosh.nooshapi.vo.ProjectBaseVO
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public ProjectBaseVO project;

    public EstimateBaseVO withProject(ProjectBaseVO project) {
        this.project = project;
        return this;
    }
    
    /**
     * Java type: com.noosh.nooshapi.vo.RfeBaseVO
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rfe")
    public RfeBaseVO rfe;

    public EstimateBaseVO withRfe(RfeBaseVO rfe) {
        this.rfe = rfe;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;

    public EstimateBaseVO withStatus(String status) {
        this.status = status;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @JsonProperty("submit_date")
    public LocalDate submitDate;

    public EstimateBaseVO withSubmitDate(LocalDate submitDate) {
        this.submitDate = submitDate;
        return this;
    }
    
    /**
     * Java type: com.noosh.nooshapi.vo.WorkgroupBaseVO
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supplier_workgroup")
    public WorkgroupBaseVO supplierWorkgroup;

    public EstimateBaseVO withSupplierWorkgroup(WorkgroupBaseVO supplierWorkgroup) {
        this.supplierWorkgroup = supplierWorkgroup;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactional_currency")
    public String transactionalCurrency;

    public EstimateBaseVO withTransactionalCurrency(String transactionalCurrency) {
        this.transactionalCurrency = transactionalCurrency;
        return this;
    }
    
    public EstimateBaseVO(){}
}
