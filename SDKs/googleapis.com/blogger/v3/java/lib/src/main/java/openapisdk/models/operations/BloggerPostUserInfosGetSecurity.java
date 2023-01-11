package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostUserInfosGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostUserInfosGetSecurityOption1 option1;
    public BloggerPostUserInfosGetSecurity withOption1(BloggerPostUserInfosGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostUserInfosGetSecurityOption2 option2;
    public BloggerPostUserInfosGetSecurity withOption2(BloggerPostUserInfosGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}