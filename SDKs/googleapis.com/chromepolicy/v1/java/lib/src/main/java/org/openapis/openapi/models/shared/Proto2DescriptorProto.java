/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Proto2DescriptorProto - Describes a message type.
 */
public class Proto2DescriptorProto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enumType")
    public Proto2EnumDescriptorProto[] enumType;

    public Proto2DescriptorProto withEnumType(Proto2EnumDescriptorProto[] enumType) {
        this.enumType = enumType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public Proto2FieldDescriptorProto[] field;

    public Proto2DescriptorProto withField(Proto2FieldDescriptorProto[] field) {
        this.field = field;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public Proto2DescriptorProto withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nestedType")
    public Proto2DescriptorProto[] nestedType;

    public Proto2DescriptorProto withNestedType(Proto2DescriptorProto[] nestedType) {
        this.nestedType = nestedType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oneofDecl")
    public Proto2OneofDescriptorProto[] oneofDecl;

    public Proto2DescriptorProto withOneofDecl(Proto2OneofDescriptorProto[] oneofDecl) {
        this.oneofDecl = oneofDecl;
        return this;
    }
    
    public Proto2DescriptorProto(){}
}
