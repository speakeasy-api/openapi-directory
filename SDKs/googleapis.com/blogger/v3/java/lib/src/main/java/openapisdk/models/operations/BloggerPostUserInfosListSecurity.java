package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostUserInfosListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostUserInfosListSecurityOption1 option1;
    public BloggerPostUserInfosListSecurity withOption1(BloggerPostUserInfosListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostUserInfosListSecurityOption2 option2;
    public BloggerPostUserInfosListSecurity withOption2(BloggerPostUserInfosListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}