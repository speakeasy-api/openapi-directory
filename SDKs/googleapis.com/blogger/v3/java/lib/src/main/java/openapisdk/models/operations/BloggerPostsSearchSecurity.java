package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsSearchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostsSearchSecurityOption1 option1;
    public BloggerPostsSearchSecurity withOption1(BloggerPostsSearchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostsSearchSecurityOption2 option2;
    public BloggerPostsSearchSecurity withOption2(BloggerPostsSearchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}