/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateUsageChargeRequestBodyUsageCharge {
    /**
     * \u5f93\u91cf\u8ab2\u91d1\u306e\u767a\u751f\u7406\u7531\u3002\u4f7f\u7528\u53ef\u80fd\u6587\u5b57\u306f ASCII, JIS X 0208, JIS X 0201, JIS X 0212\u306b\u9650\u308a\u307e\u3059\u3002\uff08[\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc](https://developer.shop-pro.jp) \u30da\u30fc\u30b8\u306b\u63b2\u8f09\u3055\u308c\u308b\u5404\u30a2\u30d7\u30ea\u306e\u300c\u5f93\u91cf\u8ab2\u91d1\u300d\u4e00\u89a7\u3067\u767b\u9332\u5185\u5bb9\u3092\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002\u30ab\u30e9\u30fc\u30df\u30fc\u30b7\u30e7\u30c3\u30d7\u5074\u304c\u3053\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u53c2\u7167\u3057\u3066\u8ab2\u91d1\u306e\u5185\u5bb9\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\uff09
     */
    @JsonProperty("description")
    public String description;

    public CreateUsageChargeRequestBodyUsageCharge withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * \u30dd\u30a4\u30f3\u30c8\u6570\uff08\u7a0e\u629c\uff09\u3002100 \u5186\u4ee5\u4e0a 100 \u4e07\u5186\u4ee5\u4e0b\u304c\u6307\u5b9a\u53ef\u80fd\u3002\u3053\u306e\u30dd\u30a4\u30f3\u30c8\u306b\u6d88\u8cbb\u7a0e\u3092\u52a0\u7b97\u3057\u3066\u30b7\u30e7\u30c3\u30d7\u30aa\u30fc\u30ca\u30fc\u306b\u8acb\u6c42\u3057\u307e\u3059\u3002
     */
    @JsonProperty("point")
    public Long point;

    public CreateUsageChargeRequestBodyUsageCharge withPoint(Long point) {
        this.point = point;
        return this;
    }
    
    public CreateUsageChargeRequestBodyUsageCharge(@JsonProperty("description") String description, @JsonProperty("point") Long point) {
        this.description = description;
        this.point = point;
  }
}
