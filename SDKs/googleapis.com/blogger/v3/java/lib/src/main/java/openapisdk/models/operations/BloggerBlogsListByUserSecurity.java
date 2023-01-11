package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerBlogsListByUserSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerBlogsListByUserSecurityOption1 option1;
    public BloggerBlogsListByUserSecurity withOption1(BloggerBlogsListByUserSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerBlogsListByUserSecurityOption2 option2;
    public BloggerBlogsListByUserSecurity withOption2(BloggerBlogsListByUserSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}